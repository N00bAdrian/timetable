var timetable = new Timetable();
timetable.setScope(8, 18);
timetable.useTwelveHour();

timetable.addLocations(['Monday','Tuesday','Wednesday', 'Thursday', 'Friday']);

//console.log(events);
events.forEach((event) => {
    var options = {
        data: {
            toggle: 'modal',
            target: '#eventModal',
            rid: event.rid,
            ename: event.ename,
            teacher: event.teacher,
            day: event.day,
            starttime: event.starttime,
            endtime: event.endtime
        }
    };

    var sth = Number(event.starttime.substring(0,2));
    var stm = Number(event.starttime.substring(3,5));
    var eth = Number(event.endtime.substring(0,2));
    var etm = Number(event.endtime.substring(3,5));
    
    timetable.addEvent(event.ename, event.day, new Date(2020,1,1, sth, stm), new Date(2020,1,1, eth, etm), options);
});

//timetable.addEvent('Maths', 'Monday', new Date(2020,1,1,9,00), new Date(2020,1,1,10,35));

var renderer = new Timetable.Renderer(timetable);
renderer.draw('.timetable');