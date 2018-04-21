class Key extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isPressed: true
		};

		// this.keyPressed = this.keyPressed.bind(this);
		this.playSound = this.playSound.bind(this);
		this.audio = React.createRef();
	}

  	playSound(evt) {
  		// console.log(evt.target);
  		this.audio.current.currentTime = 0;
  		this.audio.current.play();
  	}


	render(){
		return (
			<div className="key" data-key={this.props.dataKey} onClick={this.playSound} >
				<kbd>{String.fromCharCode(this.props.dataKey)}</kbd>
				<audio ref={this.audio} data-key={this.props.dataKey} src={"ast/" + this.props.dataKey + ".wav"}></audio>
			</div>
		);
	}
}

const keyCodesArr = [65,83,68,70,71,72,74,75,76];
const keyboardArr = keyCodesArr.map((keyCode,i) => <Key key={i} dataKey={keyCode} />);

ReactDOM.render(<div className="keys">
                	{keyboardArr}
				</div>
                , document.getElementById('root'));