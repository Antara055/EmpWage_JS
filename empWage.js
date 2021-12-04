//UC5
{
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOUR=4;
    const FULL_TIME_HOUR=8;
    const WAGE_PER_HOUR=20;
    const NO_OF_WORKING_DAYS=20;
    const MAX_HOURS_IN_MONTH=160;
    {
        function getWorkinhHours(empCh){
            switch(empCh){
                case IS_FULL_TIME:
                    return FULL_TIME_HOUR;
                case IS_PART_TIME:
                     return PART_TIME_HOUR;
                default:
                    return 0;    
            }
        }
        let totalEmpHours=0;
        let workingDays=0;
        while(totalEmpHours<MAX_HOURS_IN_MONTH && workingDays<NO_OF_WORKING_DAYS){
        let empCheck=Math.floor(Math.random()*10)%3;
        totalEmpHours=getWorkinhHours(empCheck)+totalEmpHours;
        workingDays++;
        }
        let empWage=totalEmpHours*WAGE_PER_HOUR;
        
        console.log("Employee is work for"+totalEmpHours+"hours,"+workingDays+"days and total Employee wage is: "+empWage);
        }
    }

