import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";


export const EmailTemplate = ({
   
}) => (
    <Html>
        <Head />
        <Preview>
            heyyy...you recieved this precious file from your lovingly Ayush    </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={'/logo.png'}
                    width="170"
                    height="50"
                    alt="Koala"
                    style={logo}
                />
                <Text style={paragraph}>Hi Sagar,</Text>
                <Text style={paragraph}>
                    welcome to codewithhim_ page ...get your designed pages ui/ux from here
                </Text>
                <Section style={btnContainer}>
                    <Button style={button} >
                        Get started
                    </Button>
                </Section>
                <Text style={paragraph}>
                    Best,
                    <br />
                    The Codewithhim_ Team
                </Text>
                <Hr style={hr} />
                <Text style={footer}>
                    57th Street, Sector 69, Gurugram
                </Text>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const logo = {
    margin: "0 auto",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};

const btnContainer = {
    textAlign: "center",
};

const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};
