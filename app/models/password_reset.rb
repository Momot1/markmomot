class PasswordReset < MailForm::Base

#   attribute :name, validate: true
  attribute :email, validate: /\A[^@\s]+@[^@\s]+\z/i
  attribute :file, attachment: true

#   attribute :message
#   attribute :phone
  attribute :nickname, captcha: true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    puts @email
    {
      subject: "Password Reset",
      to: @email,
      from: "password-reset@markmomot.com"
    }
  end
end
