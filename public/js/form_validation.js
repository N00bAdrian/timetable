$.validator.addMethod('greaterThan', (value, element, param) => {
    console.log(value);
    console.log($(param).val());
    var result =  value > $(param).val();
    console.log(result);
    return result;
});

$(() => {
    $('form[name=\'addevent\']').validate({
        rules: {
            ename: 'required',
            teacher: 'required',
            place: 'required',
            day: 'required',
            starttime: 'required',
            endtime: {
                required: true,
                greaterThan: '#timepicker1'
            }
        }, 

        messages: {
            ename: 'Event name required',
            teacher: 'Teacher required',
            place: 'Place required',
            day: 'Day required',
            starttime: 'Start time required',
            endtime: {
                required: 'End time required',
                greaterThan: 'End time must be later than start time'
            }
        },

        submitHandler: (form) => {          
            form.submit();
        }
    });
});