import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key !== 'Escape') return;
    this.props.onClose();
    return;
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClose = e => {
    console.log(e);
    if (e.target !== e.currentTarget) return;
    this.props.onClose();
    return;
  };

  render() {
    return (
      <>
        <div className="modal-backdrop fade show " />
        <div
          className="modal fade show"
          style={{ display: 'block' }}
          onClick={this.handleBackdropClose}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={this.props.onClose}
                />
              </div>

              <div className="modal-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, sit. Eveniet doloribus consequuntur fugit, unde
                mollitia laudantium officia, labore quae libero consectetur sunt
                nam natus. Unde praesentium debitis reprehenderit itaque.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
