let day="Friday"
switch(day){
    case 'monday':
    case 'tuesday' :
    case 'wednesday':
    console.log("9am");
    break;
    case 'Friday':
    case 'Saturday':
    case 'thursday':
    console.log("6am");
    break;
    case 'sunday':
        console.log("11am");
        break;
        default:
            console.log("Holiday-No time limit")
}