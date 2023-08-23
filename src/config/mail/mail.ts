interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}
export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'protackweb@protack.com.br',
      name: 'arn:aws:iam::843139862040:user/ses-smtp-user.20230818-105817',
    },
  },
} as IMailConfig;
