class Card extends Component {
  render() { 
    return ( 
      <div>
        <card className={`rounded-${this.props.rounded} ${this.props.spacing}`}>
          <div className={`card-header bg-dark text-light rounded=${this.props.rounded}`}>
            <h4 className="card-title mb-0">
              {this.props.icon} {this.props.title}
            </h4>
          </div>
          <div className='card-body'>{this.props.children}</div>
        </card>
      </div>);
  }
}

export default Card;