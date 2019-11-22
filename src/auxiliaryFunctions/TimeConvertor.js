export const timeConverter = UNIX_timestamp => {
    let t = new Date(UNIX_timestamp*1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = t.getFullYear();
    let month = months[t.getMonth()];
    let date = t.getDate();
    let hour = t.getHours();
    let min = (t.getMinutes() < 10) ? "0"+t.getMinutes() : t.getMinutes();
    let sec = (t.getSeconds() < 10) ? "0"+t.getSeconds() : t.getSeconds();
    let dateTime = date+' '+month+' '+year+' '+hour+':'+min+':'+sec ;
    return dateTime;
}
