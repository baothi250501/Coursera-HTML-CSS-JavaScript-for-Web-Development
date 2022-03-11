function getTimestamp(date){
    return Math.round(Date.parse(date) / 1000);
}

function formatDate(date){
    const dd = ('0' + date.getDate()).slice(-2);
    const mm = ('0' + (date.getMonth() + 1)).slice(-2);
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`+ "<br/> (Thứ bảy)";
}

function formatStartTime(date){
    date.setHours(19);
    date.setMinutes(30);
    date.setSeconds(00);
    return formatDate(date).slice(0, 10) + " 19:30:00 UTC + 7 <br/>"+ "(" + getTimestamp(date) + ")";
}

function formatEndTime(date){
    date.setHours(22);
    date.setMinutes(30);
    date.setSeconds(00);
    return formatDate(date).slice(0, 10) + " 22:30:00 UTC + 7 <br/>"+ "(" + getTimestamp(date) + ")";
}

function updateTime(numRows){
    const contestDate = document.getElementsByClassName("contest-date");
    const contestStartTime = document.getElementsByClassName("contest-start-time");
    const contestEndTime = document.getElementsByClassName("contest-end-time");

    var today = new Date();
    var currentDay = today.getDay();
    var satNext = new Date();
    if (currentDay == 6){
        var date = new Date();
        date.setHours(19);
        date.setMinutes(30);
        date.setSeconds(00);
        var milestone = getTimestamp(date);
        var timeStamp = getTimestamp(today);
        if (milestone <= timeStamp){
            satNext.setDate(today.getDate() + 7);
        } 
    } else {
        var offset = 6 - currentDay;
        satNext.setDate(today.getDate() + offset);
    }
    for (let i = 0; i < numRows; ++i){
        contestDate[i].innerHTML = formatDate(satNext);
        contestStartTime[i].innerHTML = formatStartTime(satNext);
        contestEndTime[i].innerHTML = formatEndTime(satNext);
        satNext.setDate(satNext.getDate() + 7);
    }
}

function createTable(numRows){
    var root = document.getElementById("root");
    var table = ` <table>
                    <tr>
                        <th>Ngày</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th>
                    </tr> `;
    for (let i = 0; i < numRows; ++i){
        table += ` <tr> 
                        <td class="contest-date"></td>
                        <td class="contest-start-time"></td>
                        <td class="contest-end-time"></td>
                    </tr>`;
    }
    table += "</table>"
    root.innerHTML = table;
    updateTime(numRows);
}