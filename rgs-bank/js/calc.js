let dayTo;
let dayFrom;

function dayFromCallback(day) {
    getResult();
    dayFrom = day._d;
    $('#main__time-from-input').val(dayFrom.toLocaleDateString());
    options.minDate = dayFrom;
    $('#main__time-to').daterangepicker(options, dayToCallback);

    if (dayFrom && dayTo) {
        $('#rgsTime').val(Math.ceil((dayTo - dayFrom) / (60 * 60 * 24 * 1000)) + 1);

        if (dayFrom >= dayTo) {
            $('#main__time-to-input').val(day._d.toLocaleDateString());
            $('#rgsTime').val('1');
            dayTo = day._d;
        }
    }
    options.minDate = day._d;

}

function dayToCallback(day) {
    getResult();
    dayTo = day._d;
    $('#main__time-to-input').val(dayTo.toLocaleDateString());

    if (dayTo && dayFrom) {
        $('#rgsTime').val(Math.ceil((dayTo - dayFrom) / (60 * 60 * 24 * 1000)) + 1);
    } else if (!dayFrom) {
        $('#rgsTime').val(Math.ceil((dayTo - options.minDate) / (60 * 60 * 24 * 1000)) + 1);
    }
}

const options = {
    "autoApply": true,
    "singleDatePicker": true,
    'autoUpdateInput': true,
    "startDate": (new Date()).toLocaleDateString(),
    "endDate": (new Date()).toLocaleDateString(),
    'minDate': new Date(),
    "locale": {
        "format": "DD.MM.YYYY",
        "separator": " - ",
        "daysOfWeek": [
            "Вс",
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб"
        ],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        "firstDay": 1
    }
};
document.querySelector('#rgsTime').oninput = function(e) {
    let days = $('#rgsTime').val();
    getResult();
    if (days > 0) {
        $('#main__time-to-input').val((new Date(+options.minDate + (days - 1) * 1000 * 60 * 60 * 24)).toLocaleDateString());
    }
};

$('#main__time-from').daterangepicker(options, dayFromCallback);
$('#main__time-to').daterangepicker(options, dayToCallback);
$('#rgs-btn-request').addClass('rgs-button_disable');

$('#main__time-from-input').val(new Date().toLocaleDateString());
dayFrom = options.minDate;
function getResult(){
    let fz = $('#rgs-fz').val();
    let product = $('#rgs-product').val();
    let sum = $('#rgs-sum').val();
    let rgsTime = $('#rgsTime').val();
    let date1 = $('#main__time-from-input').val();
    let date2 = $('#main__time-to-input').val();
    let advance = document.querySelector('#rgs-advance');
    if(!fz || !product || !sum || !rgsTime || !date1 || !date2 ) {
        $('#rgs-btn-request').addClass('rgs-button_disable');
        return;
    }
    $('#rgs-btn-request').removeClass('rgs-button_disable');
    let data = {
        fz: fz,
        summ: sum,
        duration: rgsTime,
        product: product,
        date_start: date1,
        date_end: date2,
        advance: advance.checked
    };
    // $('#response-form').arcticmodal();
    //?fz=${fz}&product=${product}&cost=${sum}&days=${rgsTime}
    var url = (!!apiUrl) ? apiUrl : 'https://box.srvtests.com/tariff_calculator/api/calculate/';
    $.post(url, data, function(data) {
        if(data.cost == null){
            $('#rgs-finalSum').html(0 + ' ₽');
            document.querySelector('.rgc-calc__container-item__button button').classList.add('disable');
        }else{
            $('#rgs-finalSum').html(data.cost.split(',')[0] + ' ₽');
            document.querySelector('.rgc-calc__container-item__button button').classList.remove('disable');
        }

    });
}
//work with data from forms
function sendRequest(){
    let fz = $('#rgs-fz').val();
    let product = $('#rgs-product').val();
    let sum = $('#rgs-sum').val();
    let rgsTime = $('#rgsTime').val();
    let date1 = $('#main__time-from-input').val();
    let date2 = $('#main__time-to-input').val();
    let cost = $('#rgs-finalSum').html().replace(/\s/g,'').replace(/\,.*/g,'');
    let advance = document.querySelector('#rgs-advance');
    if(!fz || !product || !sum || !rgsTime || !date1 || !date2 ) {
        return;
    }

    $('input[name = fz]').val(fz);
    $('input[name = guarantee]').val(product);
    $('input[name = sum]').val(sum);
    $('input[name = days]').val(rgsTime);
    $('input[name = date-from]').val(date1);
    $('input[name = date-to]').val(date2);
    $('input[name = cost]').val(cost);
    $('input[name = preparation]').val(advance);
    $('#request-form').arcticmodal();
}
function sendForm(form) {
    console.log(form);
    $.arcticmodal('close');

}


