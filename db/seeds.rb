require 'faker'

10.times do
	name = Faker::Name.unique.name
	handle = name.split(' ')[0] << name.split(' ')[1]
	email = Faker::Internet.email
	image = Faker::Avatar.image
	bio = Faker::Lorem.paragraph
	password_digest = ""
	User.create!(name: name, handle: handle, email: email, image: image, bio: bio, password_digest: password_digest)
end

40.times do
	user_id = User.ids.sample
	content = Faker::Lorem.paragraph
	Post.create!(user_id: user_id, content: content)
end

