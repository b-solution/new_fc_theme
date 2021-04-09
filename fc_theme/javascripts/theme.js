
document.write('<script type="text/javascript" src="/themes/fc_theme/javascripts/collapzion.min.js" ></script>');
$('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />');

$(document).on('ready', function() {
  let user_value = $('#loggedas a').text();
  $('#loggedas').hide();

  // for responsiveness
  if (screen.width > 768) {
    $('.my-account').prop('href', 'javascript:void()');
    $('.my-account').html(`<div class="header-dropdown">
      <span class='h-avatar'>${user_value[0]}</span>
      <span class='header-dropdown-arrow'></span>
      <div class="header-dropdown-content">
        <p><a href="/my/account">My account</a></p>
        <p class='m-0'><a href="/logout">Sign Out</a></p>
      </div>
    </div>`
    )
  }
  debugger

  if ($('.query-columns span.buttons input[type=button]:nth-child(3)')) {
    $('.query-columns span.buttons input[type=button]:nth-child(3)').val('\u005E');
    $('.query-columns span.buttons input[type=button]:nth-child(4)').val('\u005E\u005E');
  }

  if ($("#new-object").is(':visible')) {
    let node = document.createElement("div");
    let new_obj_arr = [];
    node.id = 'btncollapzion';
    document.getElementById("wrapper3").appendChild(node);

    $($("#new-object").siblings()).children().each(function(index) {
      new_obj_arr.push({url: this.firstElementChild.href, label: $(this).text()});
    });
    $("#new-object").hide();

    $('#btncollapzion').Collapzion({
      _child_attribute: new_obj_arr,
      _main_btn_color: '#18D07A;',
      _child_btn_color: '#f4645f;',
    });
  }

  if ($('table.issues').is(':visible')) {
    $("td.status").each(function(){
      let $this = $(this);
      $this.attr("data-status", $this.text().toLowerCase());
      $this.html(`<span class='status-${$this.text().toLowerCase().replace(/ /gi, '-')}'>${$this.text()}</span>`);
    });
    $("td.priority").each(function(){
      let $this = $(this);
      $this.attr("data-priority", $this.text().toLowerCase());
      $this.html(`<span class='prority-${$this.text().toLowerCase().replace(/ /gi, '-')}'>${$this.text()}</span>`);
    });
  }

  if ($('.issues-board').is(':visible')) {
    $(".issue-card").each(function() {
      let $this = $(this);
      let attributes = $this.find('.attributes').text().trim().replace(/: /gi, ":");
      let new_attributes = "<span>";
      attributes.split(" ").filter(e => e.trim()).forEach((attr) => {
        rep = attr.replace(/Category:/gi, '').replace(/Severity:/gi, '');
        new_attributes = new_attributes + `<span class='attr-${rep.toLowerCase()}'>${rep.replace(':', ': ')}</span><br>`;
      });
      new_attributes = new_attributes + "</span>";
      $this.find('.attributes').html(new_attributes);

      let assignee = $this.find('.assigned-user .user').text().trim();
      let $user_elem = $this.find('.assigned-user .user a').length > 0 ? $this.find('.assigned-user .user a') : $this.find('.assigned-user .user');
      $user_elem.text(assignee.split(" ").map(a => a[0]).join('').toUpperCase().substring(0, 2));
    })
  }


  if ($('#btncollapzion').is(':visible')) {
    $('._collapz_parant').on('click', function() {
      if ($(this).hasClass('_open')) {
        $("._child_collapzion li").each(function() {
          $(this).children('a').html($(this).children('span').text());
          $(this).children('span').remove();
        });
      }
    });
  }

  if ($('.breadcrumbs').is(':visible')) {
    $('.separator').each(function() {
      $(this).html('<span> | </spa>');
    });
  }
});
