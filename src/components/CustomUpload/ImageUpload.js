
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import defaultImage from "../../assets/img/image_placeholder.jpg";
import defaultAvatar from "../../assets/img/placeholder.jpg";
import { userActions } from "../../redux/actions/userAction"
import { connect } from 'react-redux'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: this.props.userFromStore.profile.avatar ? "" : null,
      imagePreviewUrl:  this.props.userFromStore.profile.avatar
      
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  

  handleImageChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    this.props.avatarUpdateToState(file)
    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
  
  }

  handleClick(e) {
   this.refs.fileInput.click();
  
  }

  handleRemove() {
    this.setState({
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage
    });
    this.refs.fileInput.value = null;
  }
  render() {
 
    return (
  
      <div className="fileinput text-center">
        <input type="file" onChange={this.handleImageChange} ref="fileInput" />
        <div className={"thumbnail" + (this.props.avatar ? " img-circle" : "")}>
          <img src={this.state.imagePreviewUrl} alt="..." />
          
        </div>
        <div>
          {this.state.file === null ? (
            <Button
              color={this.props.addBtnColor}
              className={this.props.addBtnClasses}
              onClick={(e) => this.handleClick(e)}
            >
              {this.props.avatar ? "Add Photo" : "Select image"}
            </Button>
          ) : (
            <span>
              <Button
                color={this.props.changeBtnColor}
                className={this.props.changeBtnClasses}
                onClick={(e) => this.handleClick(e)}
              >
                Change
              </Button>
              {this.props.avatar ? <br /> : null}
              <Button
                color={this.props.removeBtnColor}
                className={this.props.removeBtnClasses}
                onClick={() => this.handleRemove()}
              >
                <i className="fa fa-times" /> Remove
              </Button>
            </span>
          )}
        </div>
      </div>
    );
  }
}

ImageUpload.defaultProps = {
  avatar: false,
  removeBtnClasses: "btn-round",
  removeBtnColor: "danger",
  addBtnClasses: "btn-round",
  addBtnColor: "primary",
  changeBtnClasses: "btn-round",
  changeBtnColor: "primary"
};

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  removeBtnClasses: PropTypes.string,
  removeBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link"
  ]),
  addBtnClasses: PropTypes.string,
  addBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link"
  ]),
  changeBtnClasses: PropTypes.string,
  changeBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link"
  ])
};

const mapDispatchToProps = (dispatch) => ({
  avatarUpdateToState: (file) => {
    dispatch(userActions.avatarUpdateToState(file))
  }
})



const mapStateToProps = state => {
  const { file, user } = state.updateData;
  return {
    fileFromStore: file,
    userFromStore: user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
