import * as dotenv from 'dotenv';
dotenv.config();

export const env_config = () => {
   const env = process.env;

   return {
      type: env.TYPE,
      project_id: env.PROJECT_ID,
      private_key_id: env.PRIAVTE_KEY_ID,
      private_key: env.PRIVATE_KEY,
      client_email: env.CLIENT_EMAIL,
      client_id: env.CLIENT_D,
      auth_uri: env.AUTH_URI,
      token_uri: env.TOKEN_URI,
      auth_provider_x509_cert_url: env.AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: env.CLIENT_X509_CERT_URL,
   };
};
