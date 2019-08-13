'use strict';

$(document).ready(function () {
    $('.header__link').click(function () {
        $('.header__submenu').toggleClass('active');
    });

    $('.header__list_link').click(function () {
        $('.header__list_submenu').toggleClass('active-menu');
    });

    $('.text__item-1').hover(function () {
        $('.text__active-1').text('для задач бытового обогрева, объектов гражданского строительства и обычных зон в промышленности').css({ 'font-size': '15px', 'text-transform': 'lowercase' });
    }, function () {
        $('.text__active-1').text('низкотемпературный').css({ 'font-size': '25px', 'text-transform': 'uppercase' });
    });

    $('.text__item-2').hover(function () {
        $('.text__active-2').text('для строительства и промышленных объектов, для зон, классифицируемых как взрывоопасные').css({ 'font-size': '15px', 'text-transform': 'lowercase' });
    }, function () {
        $('.text__active-2').text('низкотемпературный').css({ 'font-size': '25px', 'text-transform': 'uppercase' });
    });

    $('.text__item-3').hover(function () {
        $('.text__active-3').text('для промышленных объектов в том числе для зон, классифицируемых как взрывоопасные').css({ 'font-size': '15px', 'text-transform': 'lowercase' });
    }, function () {
        $('.text__active-3').text('низкотемпературный').css({ 'font-size': '25px', 'text-transform': 'uppercase' });
    });

    if ($(window).width() <= 991) {
        $('.text__item-1').hover(function () {
            $('.text__active-1').text('для задач бытового обогрева, объектов гражданского строительства и обычных зон в промышленности').css({ 'font-size': '15px', 'text-transform': 'lowercase' });
        }, function () {
            $('.text__active-1').text('низкотемпературный').css({ 'font-size': '20px', 'text-transform': 'uppercase' });
        });

        $('.text__item-2').hover(function () {
            $('.text__active-2').text('для строительства и промышленных объектов, для зон, классифицируемых как взрывоопасные').css({ 'font-size': '15px', 'text-transform': 'lowercase' });
        }, function () {
            $('.text__active-2').text('низкотемпературный').css({ 'font-size': '20px', 'text-transform': 'uppercase' });
        });

        $('.text__item-3').hover(function () {
            $('.text__active-3').text('для промышленных объектов в том числе для зон, классифицируемых как взрывоопасные').css({ 'font-size': '15px', 'text-transform': 'lowercase' });
        }, function () {
            $('.text__active-3').text('низкотемпературный').css({ 'font-size': '20px', 'text-transform': 'uppercase' });
        });
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuaGVhZGVyX19saW5rJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuaGVhZGVyX19zdWJtZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnLmhlYWRlcl9fbGlzdF9saW5rJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuaGVhZGVyX19saXN0X3N1Ym1lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlLW1lbnUnKTtcbiAgICB9KTtcblxuICAgICQoJy50ZXh0X19pdGVtLTEnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy50ZXh0X19hY3RpdmUtMScpLnRleHQoJ9C00LvRjyDQt9Cw0LTQsNGHINCx0YvRgtC+0LLQvtCz0L4g0L7QsdC+0LPRgNC10LLQsCwg0L7QsdGK0LXQutGC0L7QsiDQs9GA0LDQttC00LDQvdGB0LrQvtCz0L4g0YHRgtGA0L7QuNGC0LXQu9GM0YHRgtCy0LAg0Lgg0L7QsdGL0YfQvdGL0YUg0LfQvtC9INCyINC/0YDQvtC80YvRiNC70LXQvdC90L7RgdGC0LgnKS5jc3MoeyAnZm9udC1zaXplJzogJzE1cHgnLCAndGV4dC10cmFuc2Zvcm0nOiAnbG93ZXJjYXNlJyB9KTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy50ZXh0X19hY3RpdmUtMScpLnRleHQoJ9C90LjQt9C60L7RgtC10LzQv9C10YDQsNGC0YPRgNC90YvQuScpLmNzcyh7ICdmb250LXNpemUnOiAnMjVweCcsICd0ZXh0LXRyYW5zZm9ybSc6ICd1cHBlcmNhc2UnIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLnRleHRfX2l0ZW0tMicpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnRleHRfX2FjdGl2ZS0yJykudGV4dCgn0LTQu9GPINGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstCwINC4INC/0YDQvtC80YvRiNC70LXQvdC90YvRhSDQvtCx0YrQtdC60YLQvtCyLCDQtNC70Y8g0LfQvtC9LCDQutC70LDRgdGB0LjRhNC40YbQuNGA0YPQtdC80YvRhSDQutCw0Log0LLQt9GA0YvQstC+0L7Qv9Cw0YHQvdGL0LUnKS5jc3MoeyAnZm9udC1zaXplJzogJzE1cHgnLCAndGV4dC10cmFuc2Zvcm0nOiAnbG93ZXJjYXNlJyB9KTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy50ZXh0X19hY3RpdmUtMicpLnRleHQoJ9C90LjQt9C60L7RgtC10LzQv9C10YDQsNGC0YPRgNC90YvQuScpLmNzcyh7ICdmb250LXNpemUnOiAnMjVweCcsICd0ZXh0LXRyYW5zZm9ybSc6ICd1cHBlcmNhc2UnIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLnRleHRfX2l0ZW0tMycpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnRleHRfX2FjdGl2ZS0zJykudGV4dCgn0LTQu9GPINC/0YDQvtC80YvRiNC70LXQvdC90YvRhSDQvtCx0YrQtdC60YLQvtCyINCyINGC0L7QvCDRh9C40YHQu9C1INC00LvRjyDQt9C+0L0sINC60LvQsNGB0YHQuNGE0LjRhtC40YDRg9C10LzRi9GFINC60LDQuiDQstC30YDRi9Cy0L7QvtC/0LDRgdC90YvQtScpLmNzcyh7ICdmb250LXNpemUnOiAnMTVweCcsICd0ZXh0LXRyYW5zZm9ybSc6ICdsb3dlcmNhc2UnIH0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnRleHRfX2FjdGl2ZS0zJykudGV4dCgn0L3QuNC30LrQvtGC0LXQvNC/0LXRgNCw0YLRg9GA0L3Ri9C5JykuY3NzKHsgJ2ZvbnQtc2l6ZSc6ICcyNXB4JywgJ3RleHQtdHJhbnNmb3JtJzogJ3VwcGVyY2FzZScgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gOTkxKSB7XG4gICAgICAgICQoJy50ZXh0X19pdGVtLTEnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcudGV4dF9fYWN0aXZlLTEnKS50ZXh0KCfQtNC70Y8g0LfQsNC00LDRhyDQsdGL0YLQvtCy0L7Qs9C+INC+0LHQvtCz0YDQtdCy0LAsINC+0LHRitC10LrRgtC+0LIg0LPRgNCw0LbQtNCw0L3RgdC60L7Qs9C+INGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstCwINC4INC+0LHRi9GH0L3Ri9GFINC30L7QvSDQsiDQv9GA0L7QvNGL0YjQu9C10L3QvdC+0YHRgtC4JykuY3NzKHsgJ2ZvbnQtc2l6ZSc6ICcxNXB4JywgJ3RleHQtdHJhbnNmb3JtJzogJ2xvd2VyY2FzZScgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy50ZXh0X19hY3RpdmUtMScpLnRleHQoJ9C90LjQt9C60L7RgtC10LzQv9C10YDQsNGC0YPRgNC90YvQuScpLmNzcyh7ICdmb250LXNpemUnOiAnMjBweCcsICd0ZXh0LXRyYW5zZm9ybSc6ICd1cHBlcmNhc2UnIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcudGV4dF9faXRlbS0yJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnRleHRfX2FjdGl2ZS0yJykudGV4dCgn0LTQu9GPINGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstCwINC4INC/0YDQvtC80YvRiNC70LXQvdC90YvRhSDQvtCx0YrQtdC60YLQvtCyLCDQtNC70Y8g0LfQvtC9LCDQutC70LDRgdGB0LjRhNC40YbQuNGA0YPQtdC80YvRhSDQutCw0Log0LLQt9GA0YvQstC+0L7Qv9Cw0YHQvdGL0LUnKS5jc3MoeyAnZm9udC1zaXplJzogJzE1cHgnLCAndGV4dC10cmFuc2Zvcm0nOiAnbG93ZXJjYXNlJyB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnRleHRfX2FjdGl2ZS0yJykudGV4dCgn0L3QuNC30LrQvtGC0LXQvNC/0LXRgNCw0YLRg9GA0L3Ri9C5JykuY3NzKHsgJ2ZvbnQtc2l6ZSc6ICcyMHB4JywgJ3RleHQtdHJhbnNmb3JtJzogJ3VwcGVyY2FzZScgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy50ZXh0X19pdGVtLTMnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcudGV4dF9fYWN0aXZlLTMnKS50ZXh0KCfQtNC70Y8g0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9GFINC+0LHRitC10LrRgtC+0LIg0LIg0YLQvtC8INGH0LjRgdC70LUg0LTQu9GPINC30L7QvSwg0LrQu9Cw0YHRgdC40YTQuNGG0LjRgNGD0LXQvNGL0YUg0LrQsNC6INCy0LfRgNGL0LLQvtC+0L/QsNGB0L3Ri9C1JykuY3NzKHsgJ2ZvbnQtc2l6ZSc6ICcxNXB4JywgJ3RleHQtdHJhbnNmb3JtJzogJ2xvd2VyY2FzZScgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy50ZXh0X19hY3RpdmUtMycpLnRleHQoJ9C90LjQt9C60L7RgtC10LzQv9C10YDQsNGC0YPRgNC90YvQuScpLmNzcyh7ICdmb250LXNpemUnOiAnMjBweCcsICd0ZXh0LXRyYW5zZm9ybSc6ICd1cHBlcmNhc2UnIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59KTsiXX0=
