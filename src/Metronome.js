import React, {
    Component
} from 'react';
import './Metronome.css';
import ding1 from './Ding.mp3';
import ding2 from './Ding2.mp3';

class Metronome extends Component {
    // Initializes the metronome.
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        };

        // Creating dings for the metronome.
        this.ding1 = new Audio(ding1);
        this.ding2 = new Audio(ding2);
    }

    // Used to make the slider work.
    BpmChange = event => {
        // Used => since a normal function wouldn't work when going to onChange (calling a reference)
        const bpm = event.target.value;
        
        if (this.state.playing) {
            clearInterval(this.timer);
            this.timer = setInterval(this.startDing, (60 / bpm) * 1000);
            this.setState({count: 0, bpm});
        }
        else {
            this.setState({bpm});
        }
    }

    // Used for starting the metronome and playing the dings at the appropriate times.
    startStop = () => {
        // If it is currently in use, then we can stop it.
        if (this.state.playing) {
            clearInterval(this.timer);
            this.setState({playing: false});
        }
        // Not in use, then we start it with the BPM the slider is at.
        else {
            this.timer = setInterval(this.startDing, (60 / this.state.bpm) * 1000);
            this.setState({count: 0, playing: true}, this.startDing);
        }
    }

    // Helper to startStop which plays the correct ding.
    startDing = () => {
        const {count, beatsPerMeasure} = this.state;

        // Checks to see which ding we are on and plays the correct one.
        if (count % beatsPerMeasure === 0) {
            this.ding1.play();
        }
        else {
            this.ding2.play();
        }

        // Update beat.
        this.setState(state => ({count: (state.count + 1) % state.beatsPerMeasure}));
    }

    // Sets the parameters for the slider and metronome buttons
    render() {
        const {playing, bpm} = this.state;

        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div> {bpm} BPM </div>
                    <input 
                    type = "range" 
                    min = "60" 
                    max = "240" 
                    value = {bpm} 
                    onChange = {this.BpmChange} />
                </div>
                <button onClick = {this.startStop}> 
                {playing ? 'Stop' : 'Start'} 
                </button>
            </div>
        );
    }
}

export default Metronome;