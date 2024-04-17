import { EmailTemplate } from '../../_components/Email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const requestBody = await req.json(); // Access request body correctly

        const { data, error } = await resend.emails.send({
            from: 'veronica@resend.dev',
            to: requestBody.emailToSend,
            subject: requestBody?.userName + " sent you a file",
            react: EmailTemplate({ response: requestBody }), // Pass requestBody to EmailTemplate
        });

        if (error) {
            return new Response(JSON.stringify({ error }), { status: 500 }); // Adjust return statement
        }

        return new Response(JSON.stringify({ data }), { status: 200 }); // Adjust return statement
    } catch (error) {
        return new Response(JSON.stringify({ error }), { status: 500 }); // Adjust return statement
    }
}
