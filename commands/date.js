module.exports = {
    name: 'date',
    description: 'return\'s time stamp',
    execute(message, args){
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        var mon;
        if(month == 1){
            mon = 'januray';
        }
        else if(month == 2){
            mon = 'february';
        }
        else if(month == 3){
            mon = 'march';
        }
        else if(month == 4){
            mon = 'april';
        }
        else if(month == 5){
            mon = 'may';
        }
        else if(month == 6){
            mon = 'june';
        }
        else if(month == 7){
            mon = 'july';
        }
        else if(month == 8){
            mon = 'august';
        }
        else if(month == 9){
            mon = 'september';
        }
        else if(month == 10){
            mon = 'october';
        }
        else if(month == 11){
            mon = 'november';
        }
        else if(month == 12){
            mon = 'december';
        }

        var min;
        if (minutes < 10){
            min = "0"+minutes;
        }
        else{
            min = minutes;
        }
        message.reply('The date is ' + mon + ' ' + date + ', ' + year + ' and the time is ' + hours + ':' + min);
    }
}