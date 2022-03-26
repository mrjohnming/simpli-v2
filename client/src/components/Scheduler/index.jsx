import React from 'react';
import './index.scss';
// Components
import NavBar from '../NavBar';
import SelectProject from './SelectProject';
import SelectDeliverable from './SelectDeliverable';
// Material-UI
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// Hooks
import useAppData from '../../hooks/useAppData';


export default function Scheduler() {
  const { state, setProject, getSelectedProject, getDeliverables, setDeliverable, getSelectedDeliverable } = useAppData();

  const [open, setOpen] = React.useState(true);

  const selectedProject = getSelectedProject(state);
  const deliverables = getDeliverables(state, state.project);
  const selectedDel = getSelectedDeliverable(state);

  console.log("state =", state.deliverables);
  console.log("SELECTED DEL=", selectedDel);

  let user = null;
  if (!localStorage.user) {
    return (
      <div id="scheduler_container">
        {!user && <NavBar user={null} />}
        <h1>Please <a href="/login">login</a> or <a href="/register">register</a> to view this page.</h1>
      </div>
    );
  } else {
    user = JSON.parse(localStorage.user);
  }

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div id="scheduler_container">
      {user && <NavBar user={user.name} />}

      <main id="scheduler_main">

        <aside id="menu">
          <br />
          <List sx={{ width: '100%', maxWidth: 300 }}>
            <ListItemButton onClick={handleOpen}>
              <ListItemText 
              primary="Select Project" 
              primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'bold'
              }} 
              />

            {!open ? <ExpandMore/> : <ExpandLess/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <SelectProject 
              projects={Object.values(state.projects)} 
              value={state.project} 
              onChange={setProject}
              />
              <Collapse in={open} timeout="auto" unmountOnExit>
                <SelectDeliverable
                project={state.project}
                deliverables={deliverables}
                onChange={setDeliverable} 
                selectedDel={selectedDel}
                selectedProject={selectedProject}
                />
              </Collapse>
            </Collapse>
          </List>
          <br />
          <span><strong>Completed</strong></span>
          <br /><br />
          <span>7 of 12 Deliverables</span>
          <br /><br />
          <span>32 of 54 Tasks</span>
          <br /><br />
          <AddCircleIcon id="schedule_task" className="mui_icons" />
        </aside>

        <section id="calendar">
          <table id="table">
            <tr>
              <td class="table header time"><b>Time</b></td>
              <td class="table header"><b>SUNDAY</b></td>
              <td class="table header"><b>MONDAY</b></td>
              <td class="table header"><b>TUESDAY</b></td>
              <td class="table header"><b>WEDNESDAY</b></td>
              <td class="table header"><b>THURSDAY</b></td>
              <td class="table header"><b>FRIDAY</b></td>
              <td class="table header"><b>SATURDAY</b></td>
            </tr>

            <tr>
              <td class="table time">7 AM</td>
              <td id="sun_7am" class="table item"></td>
              {/* <td id="sun_7am" class="table item booked completed">Research best front-end frameworks</td> */}
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">8 AM</td>
              <td id="sun_8am" class="table item booked completed"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">9 AM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">10 AM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">11 AM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">12 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">1 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">2 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">3 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">4 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">5 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">6 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">7 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">8 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">9 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">10 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">11 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">12 AM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

          </table>
        </section>

      </main>
    </div>
  );
}
