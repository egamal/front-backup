import React, {useState} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";  

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Mail from "@material-ui/icons/Mail";

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import modalStyles from "assets/jss/material-kit-pro-react/modalStyle.js";

const useStyles = makeStyles(modalStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const LoginModal = ({opened, setOpen, onRegister}) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      {/* LOGIN MODAL START */}
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal + " " + classes.modalLogin,
        }}
        open={opened}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-labelledby="login-modal-slide-title"
        aria-describedby="login-modal-slide-description"
      >
        <Card plain className={classes.modalLoginCard}>
          <DialogTitle
            id="login-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <CardHeader
              plain
              color="primary"
              className={classes.textCenter + " " + classes.cardLoginHeader}
            >
              <Button
                simple
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                {" "}
                <Close className={classes.modalClose} />
              </Button>
              <h5 className={classes.cardTitleWhite}>Log in</h5>
            </CardHeader>
          </DialogTitle>
          <DialogContent
            id="login-modal-slide-description"
            className={classes.modalBody}
          >
            <form onSubmit={(data) => console.log(data)}>
              <CardBody className={classes.cardLoginBody}>
                <CustomInput
                  id="login-modal-email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail className={classes.icon} />
                      </InputAdornment>
                    ),
                    placeholder: "Email...",
                    value: email,
                    onChange: (e) => setEmail(e.target.value)
                  }}
                />
                <CustomInput
                  id="login-modal-pass"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon className={classes.icon}>lock_outline</Icon>
                      </InputAdornment>
                    ),
                    placeholder: "Contraseña...",
                    type: "password",
                    value: password,
                    onChange: (e) => setPassword(e.target.value)
                  }}
                />
              </CardBody>
            </form>
          </DialogContent>
          <DialogActions
            className={classes.modalFooter + " " + classes.justifyContentCenter}
          >
            <Button color="primary" simple size="lg" onClick={() => console.log(email, password)}>
              Ingresar
            </Button>
          </DialogActions>
          <div className={classes.textCenter}>
            <p>No tenes cuenta? <Button color="primary" simple size="sm" onClick={onRegister}>Registrate</Button></p>
          </div>
        </Card>
      </Dialog>
      {/* LOGIN MODAL END */}
    </>
  );
};

export default LoginModal;
