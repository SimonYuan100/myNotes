/*===============获取屏幕的宽高==================*/
export const winSize = function () {
    var e = window,
        a = 'inner';
 
    if (!('innerWidth' in window )){
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
};
 
// winSize().height;   // height
// winSize().width;    // width