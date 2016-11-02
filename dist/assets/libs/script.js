$(document).ready(function() {
    $('.menu .item')
      .tab()
    ;
    $('#showDimmer')
        .dimmer({
          on: 'click',
          variation: 'flatgold'
        });

    $('#sidebarTrigger')
        .popup({
          inline: false,
          hoverable: true,
          position: 'right center',
        })
        .on('click', function() {
          $('#sidebarContent').sidebar({
              dimPage: false,
              transition: 'push'
          }).sidebar('toggle');
          toggleArrow();
        });


    function toggleArrow() {
      
      $('#sidebarTrigger').find('i').toggleClass('up').toggleClass('down');
      $('#sidebarTrigger').toggleClass('olive').toggleClass('orange');
      ($('header > .ui.popup').text() === "Show Tutorial") ? $('header > .ui.popup').text("Hide Tutorial"): $('header > .ui.popup').text("Show Tutorial");
      $("body").toggleClass('hideOverflow');

    }

    function setActive() {
      $('aside > div.palette.item > a').click(function() {
          $('div.palette.item.default > a').removeClass('active');
          $(this).addClass('active').siblings().removeClass('active');
          
          $('div.palette.item.custom > a').removeClass('active');
          $(this).addClass('active').siblings().removeClass('active');
      });
    }

    function setColor(classname) {
      setActive();
      resetColor();
      $('section').find(uiClass).toggleClass(classname);
      $('form').find('.ui.button, .ui.buttons, .ui.label').toggleClass(classname);
      $('#rowColored, #columnColored').toggleClass(classname);
      $('#showcaseTitle').toggleClass(classname);
    }

    function resetColor() {
      $('section').find(uiClass).removeClass(uiColor);
      $('form').find('.ui.button, .ui.buttons, .ui.label').removeClass(uiColor);
      $('#rowColored, #columnColored').removeClass(uiColor);
      $('#showcaseTitle').removeClass(uiColor);
    }

    function resetDefaultColor(){ 
      $('aside > div.palette.item.custom > a').removeClass('active');
      $('aside > div.palette.item.default > a').removeClass('active');
      resetColor();
    }

    $('#defaultColor').click(function() {
      resetDefaultColor();
    });

    var uiClass = '.ui.header, .ui.segment, .icon, .ui.label, .ui.dimmer, .ui.card, .ui.column, .ui.progress, .ui.message, .ui.menu, .ui.table';
    var uiColor = 'litecream darkgreen darkblue autumnbrown concrete flatgold black grey red orange yellow green olive violet purple pink teal blue';

    // Custom Color
    $('#litecreamColor').click(function() {
      setColor('litecream');
    });

    $('#darkgreenColor').click(function() {
      setColor('darkgreen');
    });

    $('#darkblueColor').click(function() {
      setColor('darkblue');
    });

    $('#autumnbrownColor').click(function() {
      setColor('autumnbrown');
    });

    $('#concreteColor').click(function() {
      setColor('concrete');
    });

    $('#flatGoldColor').click(function() {
      setColor('flatgold');
    });


    //Default Color
    $('#blackColor').click(function() {
      setColor('black');
    });

    $('#greyColor').click(function() {
      setColor('grey');
    });

    $('#redColor').click(function() {
      setColor('red');
    });

    $('#orangeColor').click(function() {
      setColor('orange');
    });

    $('#yellowColor').click(function() {
      setColor('yellow');
    });

    $('#greenColor').click(function() {
      setColor('green');
    });

    $('#oliveColor').click(function() {
      setColor('olive');
    });

    $('#violetColor').click(function() {
      setColor('violet');
    });

    $('#purpleColor').click(function() {
      setColor('purple');
    });

    $('#pinkColor').click(function() {
      setColor('pink');
    });

    $('#tealColor').click(function() {
      setColor('teal');
    });

    $('#blueColor').click(function() {
      setColor('blue');
    });
});
