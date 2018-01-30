import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Icon from 'material-ui/Icon';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({    
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class Users extends Component {

    state = {
        expanded: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            contacts: []
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentWillMount(){
        localStorage.getItem('contacts') && this.setState({
            contacts: JSON.parse(localStorage.getItem('contacts')),
            isLoading:false
        });
    }

    //fetching data from api
    componentDidMount() {
        if(!localStorage.getItem('contacts')){
            this.fetchData();
        }else{
            console.log('Using data from local storage')
        }
         //this.fetchData();
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('contacts', JSON.stringify(nextState.contacts));
        localStorage.setItem('contactsDate', Date.now());
    }

    handleClick() {
        return false;
        this.fetchData();
    }

    fetchData() {
        //using fetchAPI
        //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        fetch('https://randomuser.me/api/?results=10&gender=female')
            .then(response => response.json())
            .then(parsedJson => parsedJson.results.map(user => (
                {
                    name: `${user.name.first} ${user.name.last}`,
                    username: `${user.login.username}`,
                    email: `${user.email}`
                }
            )))
            .then(contacts => this.setState({
                contacts,
                isLoading: false
            }))
            .catch(error => console.log('parson failed', error))
    }

    render() {
        const { isLoading, contacts } = this.state;
        return (
            
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                    <h4>
                    {!localStorage.getItem('contacts')? "Data Loading from API": "Data Loaded from Local Storage"}
                    </h4>
                        <Button raised color="primary" onClick={this.handleClick}>
                            Fetch data&nbsp;
                        <Icon>autorenew</Icon>
                        </Button>
                    </Grid>
                    <div className={`main-content ${isLoading ? 'is-loading' : ''}`}>
                        {
                            !isLoading && contacts.length > 0 ? contacts.map(contact => {
                                return <Grid item xs={12} key={contact.username}><Paper><ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>{contact.name}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <b>Username:</b> {contact.username}<br />
                                            <b>Email:</b> {contact.email}
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel></Paper></Grid>
                            }) : null
                        }

                        <div className="loader"></div>
                    </div>
                </Grid>
        );
    }
}

export default withStyles(styles)(Users)