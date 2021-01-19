import React from "react";
import Section from "../../generic/sections/Section";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";
import Input from "../../generic/fields/Input";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import { makeStyles } from "@material-ui/core";

const HomeContactForm = (props = {}) => {
  let color;
  ({ color = "mono" } = props);

  const [state, setState] = React.useState({ status: "" });

  const classes = makeStyles((theme) => ({
    a: {
      color: theme.palette[color].contrastText,
      borderBottom: `solid 1px ${theme.palette[color].contrastText}`,
      cursor: "pointer",
    },
  }))();

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setState({ status: "SUCCESS" });
      } else {
        setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };

  return (
    <Section color={color} withContainer>
      <Title underline gutterBottom>
        Contact Me
      </Title>
      <Text>
        Get in touch with me using this form or email me at{" "}
        <a className={classes.a} href="mailto:robmolloy@hotmail.co.uk">
          robmolloy@hotmail.co.uk
        </a>
        .
      </Text>
      <br />
      <form
        onSubmit={submitForm}
        action="https://formspree.io/f/mgepdvrr"
        method="POST"
      >
        <Input label="Name" name="name" />
        <br />
        <br />
        <Input label="Email" name="email" />
        <br />
        <br />
        <Input label="Message" name="message" multiline rows={4} />
        <br />
        <br />
        {state.status === "SUCCESS" ? (
          <Title align="center" size={0}>
            Thanks!
          </Title>
        ) : (
          <ButtonPrimary type="submit">Submit</ButtonPrimary>
        )}
        {state.status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    </Section>
  );
};

export default HomeContactForm;
