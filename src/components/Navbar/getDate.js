//I know the code is bad 


export default function getDateStr() {
    const date = new Date();
    let end;
    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    };
    const months = {
        0: 'January',
        1: 'Febuary',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }
    const day = days[date.getDay()];
    const num = date.getDay()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const offNums = [1, 2, 3, 21, 22, 23, 31]
    for (let i = 0; i < offNums.length; i++) {
        if (num === offNums[i]){
            let lastItem = String.toString(offNums[i]).split().length();
            lastItem = lastItem[lastItem - 1];
            if (lastItem === 1) {
                end = 'st';
            } else if (lastItem === 2) {
                end = 'nd';
            } else if (lastItem === 3) {
                end = 'rd'
            }
        } else {
            end = 'th'
        }
        
    }
    return `${day} ${num}${end} ${month} ${year}`
}