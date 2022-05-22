class ContactForm < MailForm::Base

  attribute :name, validate: true
  attribute :email, validate: /\A[^@\s]+@[^@\s]+\z/i
  attribute :file, attachment: true

  attribute :message
  attribute :nickname, captcha: true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      subject: "http://www.markmomot.com form",
      to: "markmomot03@gmail.com",
      from: %("#{name}" <#{email}>)
    }
  end
end
