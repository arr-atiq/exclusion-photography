import React from 'react';
import './ProjectCounter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFeatherAlt, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';


const ProjectCounter = () => {

    var happy = setInterval(happyCustomer, 2)
    var projects = setInterval(RunningProject, 2)
    var clients = setInterval(ourClients, 2)
    var writers = setInterval(famousWriter, 2)
    let count1 = 125000;
    let count2 = 20;
    let count3 = 20;
    let count4 = 5;

    function happyCustomer() {
        count1++
        document.querySelector("#number1").innerHTML = count1
        if (count1 === 125663) {
            clearInterval(happy)
        }
    }

    function RunningProject() {
        count2++
        document.querySelector("#number2").innerHTML = count2
        if (count2 === 57) {
            clearInterval(projects)
        }
    }

    function ourClients() {
        count3++
        document.querySelector("#number3").innerHTML = count3
        if (count3 === 120) {
            clearInterval(clients)
        }
    }

    function famousWriter() {
        count4++
        document.querySelector("#number4").innerHTML = count4
        if (count4 === 12) {
            clearInterval(writers)
        }
    }


    return (
        <div className="container">
            <h2 className="text-center text-primary mt-4 mb-5 pt-5">Projects statistics</h2>
            <div style={{ margin:"0"}} class="row d-flex justify-content-center">
                <div className="pro-counter col-md-3 text-center mt-5 mb-5 mt-5 mt-4">
                    <i><FontAwesomeIcon icon={faUser} /></i>
                    <p id="number1" >125,663+</p>
                    <p>Happy Customers</p>
                </div>
                <div className="pro-counter col-md-3 text-center mt-5 mb-5 mt-5 mt-4">
                    <i><FontAwesomeIcon icon={faProjectDiagram} /></i>
                    <p id="number2" >57+</p>
                    <p>Running Project</p>
                </div>
                <div className="pro-counter col-md-3 text-center mt-5 mb-5 mt-5 mt-4">
                    <i><FontAwesomeIcon icon={faUser} /></i>
                    <p id="number3" >120</p>
                    <p>Our Clients</p>
                </div>
                <div className="pro-counter col-md-3 text-center mt-5 mb-5 mt-5 mt-4">
                    <i><FontAwesomeIcon icon={faFeatherAlt} /></i>
                    <p id="number4" >12</p>
                    <p>Famous Writers</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCounter;
