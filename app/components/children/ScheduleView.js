var React = require("react");
var helpers = require("../utils/helpers");

var ScheduleView = React.createClass({
  getInitialState: function() {
    return {
      empSchedules: [],
      departments: [],
      isLoaded: false,
      filter: "all",
      view: "all"
    };
  },

  componentDidMount: function() {
    helpers.getEmpSchedules().then(
      function(response) {
        if (response !== this.state.empSchedules) {
          this.setState({ empSchedules: response.data });
        }
      }.bind(this)
    );
  },

  componentWillMount: function() {
    helpers.getAllDepartments().then(
      function(response) {
        this.setState(
          {
            departments: response.data.department
          },
          this.setState({ isLoaded: true })
        );
      }.bind(this)
    );
  },

  handleUserChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  },

  render: function() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="section">
           <div className="filter-option">
                <div className="left-hand">
                  <h5>Schedule View</h5>
                </div>
                <div className="right-hand">
                    <select
                        className="browser-default"
                        name="view"
                        onChange={this.handleUserChange}
                      >
                        <option value="all">Filter Accepted</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Declined">Declined</option>
                        <option value="NotAccepted">Not Accepted</option>
                      </select>

                      <select
                        className="browser-default"
                        name="filter"
                        onChange={this.handleUserChange}
                      >
                        <option value="all">Filter Departments</option>
                        {this.state.isLoaded ? (
                          this.state.departments.map((each, i) => {
                            return (
                              <option key={i} value={each}>
                                {each}
                              </option>
                            );
                          })
                        ) : (
                          <option>Nothing</option>
                        )}
                      </select>
                </div>
           </div>
            <table className="bordered highlight mainview">
              <thead>
                <tr>
                  <th data-field="name">Name</th>
                  <th data-field="name">Mon</th>
                  <th data-field="name">Tues</th>
                  <th data-field="name">Wed</th>
                  <th data-field="name">Thurs</th>
                  <th data-field="name">Fri</th>
                  <th data-field="name">Sat</th>
                  <th data-field="name">Sun</th>
                  <th data-field="name">Department</th>
                </tr>
              </thead>
              <tbody>
                {this.state.empSchedules.map(function(schedules, i) {
                  if (this.state.filter == "all") {
                    if (this.state.view == "all") {
                      return (
                        <tr key={i}>
                          <td className="fullName">
                            {schedules.firstName} {schedules.lastName}
                          </td>
                          <td className="schedule">
                            <div className={(schedules.monday_accept == 1) ? "accept" : (schedules.monday_accept == 2) ? "decline" : (schedules.monday.length > 0) ? "not-accept" : ""}>
                              {schedules.monday}
                              <br />
                              <b>{schedules.monday_location}</b>
                              <br />
                              <div>
                                <i>{schedules.monday_des}</i>
                              </div>
                              {schedules.monday_accept == 1 ? (
                              <b style={{ color: "green" }}>Accepted</b>
                            ) : schedules.monday_accept == 2 ? (
                              <b style={{ color: "red" }}>Declined</b>
                            ) : schedules.monday.length > 0 ? (
                              <b style={{ color: "orange" }}>Not Accepted</b>
                            ) : null}
                            </div>
                            
                          </td>
                          <td>
                          <div className={(schedules.tuesday_accept == 1) ? "accept" : (schedules.tuesday_accept == 2) ? "decline" : (schedules.tuesday.length > 0) ? "not-accept" : ""}>
                              {schedules.tuesday}
                              <br />
                              <b>{schedules.tuesday_location}</b>
                              <br />
                              <div>
                                <i>{schedules.tuesday_des}</i>
                              </div>
                              {schedules.tuesday_accept == 1 ? (
                              <b style={{ color: "green" }}>Accepted</b>
                            ) : schedules.tuesday_accept == 2 ? (
                              <b style={{ color: "red" }}>Declined</b>
                            ) : schedules.tuesday.length > 0 ? (
                              <b style={{ color: "orange" }}>Not Accepted</b>
                            ) : null}
                            </div>
                            
                          </td>
                          <td>
                          <div className={(schedules.wednesday_accept == 1) ? "accept" : (schedules.wednesday_accept == 2) ? "decline" : (schedules.wednesday.length > 0) ? "not-accept" : ""}>
                            {schedules.wednesday}

                              <br />
                              <b>{schedules.wednesday_location}</b>
                              <br />
                              <div>
                                <i>{schedules.wednesday_des}</i>
                              </div>
                              {schedules.wednesday_accept == 1 ? (
                              <b style={{ color: "green" }}>Accepted</b>
                            ) : schedules.wednesday_accept == 2 ? (
                              <b style={{ color: "red" }}>Declined</b>
                            ) : schedules.wednesday.length > 0 ? (
                              <b style={{ color: "orange" }}>Not Accepted</b>
                            ) : null}
                            </div>
                            
                          </td>
                          <td>
                          <div className={(schedules.thursday_accept == 1) ? "accept" : (schedules.thursday_accept == 2) ? "decline" : (schedules.thursday.length > 0) ? "not-accept" : ""}>
                              {schedules.thursday}
                              <br />
                              <b>{schedules.thursday_location}</b>
                              <br />
                              <div>
                                <i>{schedules.thursday_des}</i>
                              </div>
                              {schedules.thursday_accept == 1 ? (
                              <b style={{ color: "green" }}>Accepted</b>
                            ) : schedules.thursday_accept == 2 ? (
                              <b style={{ color: "red" }}>Declined</b>
                            ) : schedules.thursday.length > 0 ? (
                              <b style={{ color: "orange" }}>Not Accepted</b>
                            ) : null}
                            </div>
                            
                          </td>
                          <td>
                          <div className={(schedules.friday_accept == 1) ? "accept" : (schedules.friday_accept == 2) ? "decline" : (schedules.friday.length > 0) ? "not-accept" : ""}>
                              {schedules.friday}
                              <br />
                              <b>{schedules.friday_location}</b>
                              <br />
                              <div>
                                <i>{schedules.friday_des}</i>
                              </div>
                              {schedules.friday_accept == 1 ? (
                              <b style={{ color: "green" }}>Accepted</b>
                            ) : schedules.friday_accept == 2 ? (
                              <b style={{ color: "red" }}>Declined</b>
                            ) : schedules.friday.length > 0 ? (
                              <b style={{ color: "orange" }}>Not Accepted</b>
                            ) : null}
                            </div>
                            
                          </td>
                          <td>
                          <div className={(schedules.saturday_accept == 1) ? "accept" : (schedules.saturday_accept == 2) ? "decline" : (schedules.saturday.length > 0) ? "not-accept" : ""}>
                              {schedules.saturday}
                              <br />
                              <b>{schedules.saturday_location}</b>
                              <br />
                              <div>
                                <i>{schedules.saturday_des}</i>
                              </div>
                              {schedules.saturday_accept == 1 ? (
                              <b style={{ color: "green" }}>Accepted</b>
                            ) : schedules.saturday_accept == 2 ? (
                              <b style={{ color: "red" }}>Declined</b>
                            ) : schedules.saturday.length > 0 ? (
                              <b style={{ color: "orange" }}>Not Accepted</b>
                            ) : null}
                            </div>
                            
                          </td>
                          <td>
                          <div className={(schedules.sunday_accept == 1) ? "accept" : (schedules.sunday_accept == 2) ? "decline" : (schedules.sunday.length > 0) ? "not-accept" : ""}>
                              {schedules.sunday}
                              <br />
                              <b>{schedules.sunday_location}</b>
                              <br />
                              <div>
                                <i>{schedules.sunday_des}</i>
                              </div>
                              {schedules.sunday_accept == 1 ? (
                              <b style={{ color: "green" }}>Accepted</b>
                            ) : schedules.sunday_accept == 2 ? (
                              <b style={{ color: "red" }}>Declined</b>
                            ) : schedules.sunday.length > 0 ? (
                              <b style={{ color: "orange" }}>Not Accepted</b>
                            ) : null}
                            </div>
                            
                          </td>
                          <td>{schedules.department}</td>
                        </tr>
                      );
                    } else if (this.state.view == "Accepted") {
                      return (
                        <tr key={i}>
                          <td className="fullName">
                            {schedules.firstName} {schedules.lastName}
                          </td>
                          <td className="schedule">
                            {schedules.monday_accept == 1 ? (
                              <div className="accept">
                                {schedules.monday}
                                <br />
                                <b>{schedules.monday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.monday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.tuesday_accept == 1 ? (
                              <div className="accept">
                              {schedules.tuesday}
                                <br />
                                <b>{schedules.tuesday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.tuesday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.wednesday_accept == 1 ? (
                              <div className="accept">
                              {schedules.wednesday}
                                <br />
                                <b>{schedules.wednesday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.wednesday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.thursday_accept == 1 ? (
                              <div className="accept">
                              {schedules.thursday}
                                <br />
                                <b>{schedules.thursday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.thursday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.friday_accept == 1 ? (
                              <div className="accept">
                              {schedules.friday}
                                <br />
                                <b>{schedules.friday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.friday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.saturday_accept == 1 ? (
                              <div className="accept">
                              {schedules.saturday}
                                <br />
                                <b>{schedules.saturday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.saturday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.sunday_accept == 1 ? (
                              <div className="accept">
                              {schedules.sunday}
                                <br />
                                <b>{schedules.sunday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.sunday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>{schedules.department}</td>
                        </tr>
                      );
                    } else if (this.state.view == "Accepted") {
                      return (
                        <tr key={i}>
                          <td className="fullName">
                            {schedules.firstName} {schedules.lastName}
                          </td>
                          <td className="schedule">
                            {schedules.monday_accept == 1 ? (
                              <div className="accept">
                              {schedules.monday}
                                <br />
                                <b>{schedules.monday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.monday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.tuesday_accept == 1 ? (
                              <div className="accept">
                              {schedules.tuesday}
                                <br />
                                <b>{schedules.tuesday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.tuesday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.wednesday_accept == 1 ? (
                              <div className="accept">
                              {schedules.wednesday}
                                <br />
                                <b>{schedules.wednesday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.wednesday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.thursday_accept == 1 ? (
                              <div className="accept">
                              {schedules.thursday}
                                <br />
                                <b>{schedules.thursday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.thursday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.friday_accept == 1 ? (
                              <div className="accept">
                              {schedules.friday}
                                <br />
                                <b>{schedules.friday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.friday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.saturday_accept == 1 ? (
                              <div className="accept">
                              {schedules.saturday}
                                <br />
                                <b>{schedules.saturday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.saturday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.sunday_accept == 1 ? (
                              <div className="accept">
                              {schedules.sunday}
                                <br />
                                <b>{schedules.sunday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.sunday_des}</i>
                                </div>
                                <b style={{ color: "green" }}>Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>{schedules.department}</td>
                        </tr>
                      );
                    } else if (this.state.view == "Declined") {
                      return (
                        <tr key={i}>
                          <td className="fullName">
                            {schedules.firstName} {schedules.lastName}
                          </td>
                          <td className="schedule">
                            {schedules.monday_accept == 2 ? (
                              <div className="decline">
                                {schedules.monday}
                                <br />
                                <b>{schedules.monday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.monday_des}</i>
                                </div>
                                <b style={{ color: "red" }}>Declined</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.tuesday_accept == 2 ? (
                              <div className="decline">
                              {schedules.tuesday}
                                <br />
                                <b>{schedules.tuesday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.tuesday_des}</i>
                                </div>
                                <b style={{ color: "red" }}>Declined</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.wednesday_accept == 2 ? (
                              <div className="decline">
                              {schedules.wednesday}
                                <br />
                                <b>{schedules.wednesday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.wednesday_des}</i>
                                </div>
                                <b style={{ color: "red" }}>Declined</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.thursday_accept == 2 ? (
                              <div className="decline">
                              {schedules.thursday}
                                <br />
                                <b>{schedules.thursday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.thursday_des}</i>
                                </div>
                                <b style={{ color: "red" }}>Declined</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.friday_accept == 2 ? (
                              <div className="decline">
                              {schedules.friday}
                                <br />
                                <b>{schedules.friday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.friday_des}</i>
                                </div>
                                <b style={{ color: "red" }}>Declined</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.saturday_accept == 2 ? (
                              <div className="decline">
                              {schedules.saturday}
                                <br />
                                <b>{schedules.saturday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.saturday_des}</i>
                                </div>
                                <b style={{ color: "red" }}>Declined</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.sunday_accept == 2 ? (
                              <div className="decline">
                              {schedules.sunday}
                                <br />
                                <b>{schedules.sunday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.sunday_des}</i>
                                </div>
                                <b style={{ color: "red" }}>Declined</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>{schedules.department}</td>
                        </tr>
                      );
                    } else if (this.state.view == "NotAccepted") {
                      return (
                        <tr key={i}>
                          <td className="fullName">
                            {schedules.firstName} {schedules.lastName}
                          </td>
                          <td className="schedule">
                            {schedules.monday_accept == 0 &&
                            schedules.monday.length > 0 ? (
                              <div className="not-accept">
                                {schedules.monday}
                                <br />
                                <b>{schedules.monday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.monday_des}</i>
                                </div>
                                <b style={{ color: "orange" }}>Not Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.tuesday_accept == 0 &&
                            schedules.tuesday.length > 0 ? (
                              <div className="not-accept">
                                {schedules.tuesday}
                                <br />
                                <b>{schedules.tuesday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.tuesday_des}</i>
                                </div>
                                <b style={{ color: "orange" }}>Not Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.wednesday_accept == 0 &&
                            schedules.wednesday.length > 0 ? (
                              <div className="not-accept">
                                {schedules.wednesday}
                                <br />
                                <b>{schedules.wednesday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.wednesday_des}</i>
                                </div>
                                <b style={{ color: "orange" }}>Not Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.thursday_accept == 0 &&
                            schedules.thursday.length > 0 ? (
                              <div className="not-accept">
                                {schedules.thursday}
                                <br />
                                <b>{schedules.thursday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.thursday_des}</i>
                                </div>
                                <b style={{ color: "orange" }}>Not Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.friday_accept == 0 &&
                            schedules.friday.length > 0 ? (
                              <div className="not-accept">
                                {schedules.friday}
                                <br />
                                <b>{schedules.friday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.friday_des}</i>
                                </div>
                                <b style={{ color: "orange" }}>Not Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.saturday_accept == 0 &&
                            schedules.saturday.length > 0 ? (
                              <div className="not-accept">
                                {schedules.saturday}
                                <br />
                                <b>{schedules.saturday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.saturday_des}</i>
                                </div>
                                <b style={{ color: "orange" }}>Not Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>
                            {schedules.sunday_accept == 0 &&
                            schedules.sunday.length > 0 ? (
                              <div className="not-accept">
                                {schedules.sunday}
                                <br />
                                <b>{schedules.sunday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.sunday_des}</i>
                                </div>
                                <b style={{ color: "orange" }}>Not Accepted</b>{" "}
                              </div>
                            ) : null}
                          </td>
                          <td>{schedules.department}</td>
                        </tr>
                      );
                    }
                  } else {
                    if (schedules.department == this.state.filter) {
                      if (this.state.view == "all") {
                        return (
                          <tr key={i}>
                            <td className="fullName">
                              {schedules.firstName} {schedules.lastName}
                            </td>
                            <td className="schedule">
                            <div className={(schedules.monday_accept == 1) ? "accept" : (schedules.monday_accept == 2) ? "decline" : (schedules.monday.length > 0) ? "not-accept" : ""}>
                                {schedules.monday}
                                <br />
                                <b>{schedules.monday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.monday_des}</i>
                                </div>
                                {schedules.monday_accept == 1 ? (
                                <b style={{ color: "green" }}>Accepted</b>
                              ) : schedules.monday_accept == 2 ? (
                                <b style={{ color: "red" }}>Declined</b>
                              ) : schedules.monday.length > 0 ? (
                                <b style={{ color: "orange" }}>Not Accepted</b>
                              ) : null}
                              </div>
                         
                            </td>
                            <td>
                            <div className={(schedules.tuesday_accept == 1) ? "accept" : (schedules.tuesday_accept == 2) ? "decline" : (schedules.tuesday.length > 0) ? "not-accept" : ""}>
                                {schedules.tuesday}
                                <br />
                                <b>{schedules.tuesday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.tuesday_des}</i>
                                </div>
                                {schedules.tuesday_accept == 1 ? (
                                <b style={{ color: "green" }}>Accepted</b>
                              ) : schedules.tuesday_accept == 2 ? (
                                <b style={{ color: "red" }}>Declined</b>
                              ) : schedules.tuesday.length > 0 ? (
                                <b style={{ color: "orange" }}>Not Accepted</b>
                              ) : null}
                              </div>
                            
                            </td>
                            <td>
                            <div className={(schedules.wednesday_accept == 1) ? "accept" : (schedules.wednesday_accept == 2) ? "decline" : (schedules.wednesday.length > 0) ? "not-accept" : ""}>
                                {schedules.wednesday}
                                <br />
                                <b>{schedules.wednesday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.wednesday_des}</i>
                                </div>
                                {schedules.wednesday_accept == 1 ? (
                                <b style={{ color: "green" }}>Accepted</b>
                              ) : schedules.wednesday_accept == 2 ? (
                                <b style={{ color: "red" }}>Declined</b>
                              ) : schedules.wednesday.length > 0 ? (
                                <b style={{ color: "orange" }}>Not Accepted</b>
                              ) : null}
                              </div>
                              
                            </td>
                            <td>
                            <div className={(schedules.thursday_accept == 1) ? "accept" : (schedules.thursday_accept == 2) ? "decline" : (schedules.thursday.length > 0) ? "not-accept" : ""}>
                                {schedules.thursday}
                                <br />
                                <b>{schedules.thursday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.thursday_des}</i>
                                </div>
                                {schedules.thursday_accept == 1 ? (
                                <b style={{ color: "green" }}>Accepted</b>
                              ) : schedules.thursday_accept == 2 ? (
                                <b style={{ color: "red" }}>Declined</b>
                              ) : schedules.thursday.length > 0 ? (
                                <b style={{ color: "orange" }}>Not Accepted</b>
                              ) : null}
                              </div>
                             
                            </td>
                            <td>
                            <div className={(schedules.friday_accept == 1) ? "accept" : (schedules.friday_accept == 2) ? "decline" : (schedules.friday.length > 0) ? "not-accept" : ""}>
                                {schedules.friday}
                                <br />
                                <b>{schedules.friday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.friday_des}</i>
                                </div>
                                {schedules.friday_accept == 1 ? (
                                <b style={{ color: "green" }}>Accepted</b>
                              ) : schedules.friday_accept == 2 ? (
                                <b style={{ color: "red" }}>Declined</b>
                              ) : schedules.friday.length > 0 ? (
                                <b style={{ color: "orange" }}>Not Accepted</b>
                              ) : null}
                              </div>
                              
                            </td>
                            <td>
                            <div className={(schedules.saturday_accept == 1) ? "accept" : (schedules.saturday_accept == 2) ? "decline" : (schedules.saturday.length > 0) ? "not-accept" : ""}>
                                {schedules.saturday}
                                <br />
                                <b>{schedules.saturday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.saturday_des}</i>
                                </div>
                                {schedules.saturday_accept == 1 ? (
                                <b style={{ color: "green" }}>Accepted</b>
                              ) : schedules.saturday_accept == 2 ? (
                                <b style={{ color: "red" }}>Declined</b>
                              ) : schedules.saturday.length > 0 ? (
                                <b style={{ color: "orange" }}>Not Accepted</b>
                              ) : null}
                              </div>
                              
                            </td>
                            <td>
                            <div className={(schedules.sunday_accept == 1) ? "accept" : (schedules.sunday_accept == 2) ? "decline" : (schedules.sunday.length > 0) ? "not-accept" : ""}>
                                {schedules.sunday}
                                <br />
                                <b>{schedules.sunday_location}</b>
                                <br />
                                <div>
                                  <i>{schedules.sunday_des}</i>
                                </div>
                                {schedules.sunday_accept == 1 ? (
                                <b style={{ color: "green" }}>Accepted</b>
                              ) : schedules.sunday_accept == 2 ? (
                                <b style={{ color: "red" }}>Declined</b>
                              ) : schedules.sunday.length > 0 ? (
                                <b style={{ color: "orange" }}>Not Accepted</b>
                              ) : null}
                              </div>
                             
                            </td>
                            <td>{schedules.department}</td>
                          </tr>
                        );
                      } else if (this.state.view == "Accepted") {
                        return (
                          <tr key={i}>
                            <td className="fullName">
                              {schedules.firstName} {schedules.lastName}
                            </td>
                            <td className="schedule">
                              {schedules.monday_accept == 1 ? (
                                <div className="accept">
                                  {schedules.monday}
                                  <br />
                                  <b>{schedules.monday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.monday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.tuesday_accept == 1 ? (
                                <div className="accept">
                                {schedules.tuesday}
                                  <br />
                                  <b>{schedules.tuesday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.tuesday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.wednesday_accept == 1 ? (
                                <div className="accept">
                                {schedules.wednesday}
                                  <br />
                                  <b>{schedules.wednesday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.wednesday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.thursday_accept == 1 ? (
                                <div className="accept">
                                {schedules.thursday}
                                  <br />
                                  <b>{schedules.thursday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.thursday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.friday_accept == 1 ? (
                                <div className="accept">
                                {schedules.friday}
                                  <br />
                                  <b>{schedules.friday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.friday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.saturday_accept == 1 ? (
                                <div className="accept">
                                {schedules.saturday}
                                  <br />
                                  <b>{schedules.saturday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.saturday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.sunday_accept == 1 ? (
                                <div className="accept">
                                {schedules.sunday}
                                  <br />
                                  <b>{schedules.sunday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.sunday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>{schedules.department}</td>
                          </tr>
                        );
                      } else if (this.state.view == "Accepted") {
                        return (
                          <tr key={i}>
                            <td className="fullName">
                              {schedules.firstName} {schedules.lastName}
                            </td>
                            <td className="schedule">
                              {schedules.monday_accept == 1 ? (
                                <div className="accept">
                                {schedules.monday}
                                  <br />
                                  <b>{schedules.monday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.monday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.tuesday_accept == 1 ? (
                                <div className="accept">
                                {schedules.tuesday}
                                  <br />
                                  <b>{schedules.tuesday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.tuesday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.wednesday_accept == 1 ? (
                                <div className="accept">
                                {schedules.wednesday}
                                  <br />
                                  <b>{schedules.wednesday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.wednesday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.thursday_accept == 1 ? (
                                <div className="accept">
                                {schedules.thursday}
                                  <br />
                                  <b>{schedules.thursday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.thursday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.friday_accept == 1 ? (
                                <div className="accept">
                                {schedules.friday}
                                  <br />
                                  <b>{schedules.friday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.friday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.saturday_accept == 1 ? (
                                <div className="accept">
                                {schedules.saturday}
                                  <br />
                                  <b>{schedules.saturday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.saturday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.sunday_accept == 1 ? (
                                <div className="accept">
                                {schedules.sunday}
                                  <br />
                                  <b>{schedules.sunday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.sunday_des}</i>
                                  </div>
                                  <b style={{ color: "green" }}>Accepted</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>{schedules.department}</td>
                          </tr>
                        );
                      } else if (this.state.view == "Declined") {
                        return (
                          <tr key={i}>
                            <td className="fullName">
                              {schedules.firstName} {schedules.lastName}
                            </td>
                            <td className="schedule">
                              {schedules.monday_accept == 2 ? (
                                <div className="decline">
                                {schedules.monday}
                                  <br />
                                  <b>{schedules.monday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.monday_des}</i>
                                  </div>
                                  <b style={{ color: "red" }}>Declined</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.tuesday_accept == 2 ? (
                                <div className="decline">
                                {schedules.tuesday}
                                  <br />
                                  <b>{schedules.tuesday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.tuesday_des}</i>
                                  </div>
                                  <b style={{ color: "red" }}>Declined</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.wednesday_accept == 2 ? (
                                <div className="decline">
                                {schedules.wednesday}
                                  <br />
                                  <b>{schedules.wednesday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.wednesday_des}</i>
                                  </div>
                                  <b style={{ color: "red" }}>Declined</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.thursday_accept == 2 ? (
                                <div className="decline">
                                {schedules.thursday}
                                  <br />
                                  <b>{schedules.thursday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.thursday_des}</i>
                                  </div>
                                  <b style={{ color: "red" }}>Declined</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.friday_accept == 2 ? (
                                <div className="decline">
                                {schedules.friday}
                                  <br />
                                  <b>{schedules.friday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.friday_des}</i>
                                  </div>
                                  <b style={{ color: "red" }}>Declined</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.saturday_accept == 2 ? (
                                <div className="decline">
                                {schedules.saturday}
                                  <br />
                                  <b>{schedules.saturday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.saturday_des}</i>
                                  </div>
                                  <b style={{ color: "red" }}>Declined</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.sunday_accept == 2 ? (
                                <div className="decline">
                                {schedules.sunday}
                                  <br />
                                  <b>{schedules.sunday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.sunday_des}</i>
                                  </div>
                                  <b style={{ color: "red" }}>Declined</b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>{schedules.department}</td>
                          </tr>
                        );
                      } else if (this.state.view == "NotAccepted") {
                        return (
                          <tr key={i}>
                            <td className="fullName">
                              {schedules.firstName} {schedules.lastName}
                            </td>
                            <td className="schedule">
                              {schedules.monday_accept == 0 &&
                              schedules.monday.length > 0 ? (
                                <div className="not-accept">
                                  {schedules.monday}
                                  <br />
                                  <b>{schedules.monday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.monday_des}</i>
                                  </div>
                                  <b style={{ color: "orange" }}>
                                    Not Accepted
                                  </b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.tuesday_accept == 0 &&
                              schedules.tuesday.length > 0 ? (
                                <div className="not-accept">
                                  {schedules.tuesday}
                                  <br />
                                  <b>{schedules.tuesday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.tuesday_des}</i>
                                  </div>
                                  <b style={{ color: "orange" }}>
                                    Not Accepted
                                  </b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.wednesday_accept == 0 &&
                              schedules.wednesday.length > 0 ? (
                                <div className="not-accept">
                                  {schedules.wednesday}
                                  <br />
                                  <b>{schedules.wednesday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.wednesday_des}</i>
                                  </div>
                                  <b style={{ color: "orange" }}>
                                    Not Accepted
                                  </b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.thursday_accept == 0 &&
                              schedules.thursday.length > 0 ? (
                                <div className="not-accept">
                                  {schedules.thursday}
                                  <br />
                                  <b>{schedules.thursday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.thursday_des}</i>
                                  </div>
                                  <b style={{ color: "orange" }}>
                                    Not Accepted
                                  </b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.friday_accept == 0 &&
                              schedules.friday.length > 0 ? (
                                <div className="not-accept">
                                  {schedules.friday}
                                  <br />
                                  <b>{schedules.friday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.friday_des}</i>
                                  </div>
                                  <b style={{ color: "orange" }}>
                                    Not Accepted
                                  </b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.saturday_accept == 0 &&
                              schedules.saturday.length > 0 ? (
                                <div className="not-accept">
                                  {schedules.saturday}
                                  <br />
                                  <b>{schedules.saturday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.saturday_des}</i>
                                  </div>
                                  <b style={{ color: "orange" }}>
                                    Not Accepted
                                  </b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>
                              {schedules.sunday_accept == 0 &&
                              schedules.sunday.length > 0 ? (
                                <div className="not-accept">
                                  {schedules.sunday}
                                  <br />
                                  <b>{schedules.sunday_location}</b>
                                  <br />
                                  <div>
                                    <i>{schedules.sunday_des}</i>
                                  </div>
                                  <b style={{ color: "orange" }}>
                                    Not Accepted
                                  </b>{" "}
                                </div>
                              ) : null}
                            </td>
                            <td>{schedules.department}</td>
                          </tr>
                        );
                      }
                    }
                  }
                }, this)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ScheduleView;
