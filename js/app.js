class Key extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="key" data-key={this.props.dataKey}>
				<kbd>{String.fromCharCode(this.props.dataKey)}</kbd>
				<audio data-key={this.props.dataKey} src={"ast/" + this.props.dataKey + ".wav"}></audio>
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