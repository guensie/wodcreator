import React from 'react';
// import '../styles/index.scss';
//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div className="text-center mt-5">
                <div className="container">
                    <p className="mainPhoto">Wod <span className="x">X</span></p>
                    
                </div>
                <p className="choose">Choose a Movement</p>
                
                <button onClick={boxWod} className="btn btn-dark">Box Jumps</button>
                <a href="#" onClick={burpeeWod} className="btn btn-dark">Burpees</a>
                <a href="#" onClick={cleanWod} className="btn btn-dark">Cleans</a>
                <a href="#" onClick={deadliftWod} className="btn btn-dark">Deadlifts</a>
                <a href="#" onClick={dubWod} className="btn btn-dark">Double Unders</a>
                <a href="#" onClick={hspuWod} className="btn btn-dark">Handstand Pushup</a>
                <a href="#" onClick={pullupWod} className="btn btn-dark">Pullups</a>
                <a href="#" onClick={snatchWod} className="btn btn-dark">Snatches</a>
                <a href="#" onClick={squatWod} className="btn btn-dark">Squats</a>
                <a href="#" onClick={wallballWod} className="btn btn-dark">Wallballs</a>
                <div className="wodDisplay" id="randomWod"> 
                
                </div>
            </div>

            
            
        );
    }
}
var boxjumps = ['For time: 10 dumbbell snatches, 15 burpee box jump-overs, 20 dumbbell snatches, 15 burpee box jump-overs, 30 dumbbell snatches, 15 burpee box jump-overs, 40 dumbbell snatches, 15 burpee box jump-overs, 50 dumbbell snatches, 15 burpee box jump-overs'];
var burpees=['1-2-3-4-5-6-7-8-9-10 reps for time of: dumbbell squats, bar-facing burpees', 'For time: 10 dumbbell snatches, 15 burpee box jump-overs, 20 dumbbell snatches, 15 burpee box jump-overs, 30 dumbbell snatches, 15 burpee box jump-overs, 40 dumbbell snatches, 15 burpee box jump-overs, 50 dumbbell snatches, 15 burpee box jump-overs'];
var cleans = ['12 mins AMRAP: 2 rounds of: 50ft weighted walking lunge, 16 toes-to-bars, 8 power cleans, then 2 rounds of: 50ft weighted walking lunge, 16 bar muscle-ups, 8 power cleans'];
var deadlifts = ['For time (9 min cap): 21-15-9 deadlifts & handstand pushups','13 minute AMRAP: 55 deadlifts, 55 wall-ball shots, 55-calorie row, 55 handstand push-ups (225lb/155lb)'];
var doubleunders = ['14 minute AMRAP: 7 muscle-ups, 50 wall-ball shots, 100 double-unders','10 rounds for time: 9 thrusters, 35 double-unders (95lb/65lb)', '10 minute AMRAP: 30 double-unders, 15 snatches (75lb/55lb)'];
var hspu = ['For time (9 min cap): 21-15-9 deadlifts & handstand pushups'];
var pullups = ['20 minute AMRAP: 25-ft. overhead walking lunge, 8 burpees, 25-ft. overhead walking lunge, 8 chest-to-bar pull-ups (95lb/65lb)'];
var snatches = ['7 minute AMRAP: 10 power snatches, 3 bar muscle-ups (75lb/55lb, scaled:c2b pullups)'];
var squats = ['1-2-3-4-5-6-7-8-9-10 reps for time of: dumbbell squats, bar-facing burpees', '9 minute AMRAP: 15 toes-to-bar, 10 deadlifts (115lb/75lb), 5 snatches (115lb/75lb)'];
var wallballs = ['14 minute AMRAP: 7 muscle-ups, 50 wall-ball shots, 100 double-unders'];

function boxWod(){
    var randomBoxjumps = Math.floor(Math.random() *(boxjumps.length));
    document.getElementById('randomWod').innerHTML = boxjumps[randomBoxjumps];
}
function burpeeWod(){
    var randomBurpee = Math.floor(Math.random() *(burpees.length));
    document.getElementById('randomWod').innerHTML = burpees[randomBurpee];
}
function cleanWod(){
    var randomCleans = Math.floor(Math.random() *(cleans.length));
    document.getElementById('randomWod').innerHTML = cleans[randomCleans];
}
function deadliftWod(){
    var randomDeadlifts = Math.floor(Math.random() *(deadlifts.length));
    document.getElementById('randomWod').innerHTML = deadlifts[randomDeadlifts];
}
function dubWod(){
    var randomDubs = Math.floor(Math.random() *(doubleunders.length));
    document.getElementById('randomWod').innerHTML = doubleunders[randomDubs];
}
function hspuWod(){
    var randomHSPU = Math.floor(Math.random() *(hspu.length));
    document.getElementById('randomWod').innerHTML = hspu[randomHSPU];
}
function pullupWod(){
    var randomPullups = Math.floor(Math.random() *(pullups.length));
    document.getElementById('randomWod').innerHTML = pullups[randomPullups];
}
function snatchWod(){
    var randomSnatches = Math.floor(Math.random() *(snatches.length));
    document.getElementById('randomWod').innerHTML = snatches[randomSnatches];
}
function squatWod(){
    var randomSquats = Math.floor(Math.random() *(squats.length));
    document.getElementById('randomWod').innerHTML = squats[randomSquats];
}
function wallballWod(){
    var randomWallballs = Math.floor(Math.random() *(wallballs.length));
    document.getElementById('randomWod').innerHTML = wallballs[randomWallballs];
}

