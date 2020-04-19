$(() => {
    $('form[name=\'addevent\']').validate({
        rules: {
            ename: 'required',
            teacher: 'required',
            place: 'required',
            day: 'required',
            starttime: 'required',
            endtime: 'required'
        }, 

        messages: {
            ename: 'Event name required',
            teacher: 'Teacher required',
            place: 'Place required',
            day: 'Day required',
            starttime: 'Start time required',
            endtime: 'End time required'
        },

        submitHandler: (form) => {
            form.submit();
        }
    });
});