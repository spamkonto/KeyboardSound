class Key extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isPressed: true
		};

		// binding this to their callbacks
		this.playSound = this.playSound.bind(this);
		this.removeTransistion = this.removeTransistion.bind(this);
		this.audio = React.createRef();
	}

	removeTransistion(evt) {
		// remove transintion on its end
		if(evt.propertyName !== 'transform') return;
		evt.target.classList.remove('playing');
	}

	playSound(evt) {
		// check if audio element has same key code as button pressed
		// if it has play sound appropriate for this button
		if(parseInt(this.audio.current.dataset["key"]) === evt.keyCode){
			this.audio.current.currentTime = 0;
			this.audio.current.play();

		}
	}

	componentDidMount() {
		//assigning key down listener to the window
		window.addEventListener("keydown", this.playSound);
	}

	render(){
		return (
			<div className="key" data-key={this.props.dataKey} onTransitionEnd={this.removeTransistion} >
				<kbd>{String.fromCharCode(this.props.dataKey)}</kbd>
				<audio ref={this.audio} data-key={this.props.dataKey} src={"ast/" + this.props.dataKey + ".wav"}></audio>
			</div>
		);
	}
}

// mapping keys with react <key> component
const keyCodesArr = [65,83,68,70,71,72,74,75,76];
const keyboardArr = keyCodesArr.map((keyCode,i) => <Key key={i} dataKey={keyCode} />);

ReactDOM.render(<div className="keys">
                	{keyboardArr}
				</div>
                , document.getElementById('root'));