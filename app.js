const hour = document.getElementById('hour');
const munite = document.getElementById('munite');
const second = document.getElementById('second');
const date_month = document.getElementById('date_month');
const date_day= document.getElementById('date_day');
const date_year = document.getElementById('date_year');


    setInterval(() => {
        const date = new Date();
        hour.innerHTML= date.getHours();
        munite.innerHTML= date.getMinutes();
        second.innerHTML= date.getSeconds();
        date_month.innerHTML =date.getMonth();
        date_day.innerHTML =date.getDate();
        date_year.innerHTML =date.getFullYear();
        
    }, 100);



