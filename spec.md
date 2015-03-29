
## Server spec

Relevant links:
- [client spec](https://github.com/tiberiusdao/yeslettuce-client/blob/master/spec.md)

### User stories

- register (facebook oauth)
- save preferences (gender, age range)
- choose today's date preference (ice cream, beer, coffee)
- swipe right
- swipe left
- call an Uber
- get laid

### Client-facing API endpoints

Content-type: application/json

#### POST /api/user/register

Request:

```javascript
{
  firstName: 'Andy',
  lastName: 'Jiang',
  dateOfBirth: '1988-02-24', // or whatever the format is
  createdAt: '2015-03-20',
  gender: '1',
  uberAccessToken: '123',
  uberRefreshToken: 'abc',
  fbAccessToken: '123',
  fbRefreshToken: 'abc',
  fbId: '123123'
}
```

Response:

```javascript
{
  success: 'ok'
}
```

#### POST /api/user/:userId/settings

Request:

```javascript
{
  minAge: '18',
  maxAge: '35',
  gender: '2',
  bio: 'i am a cool person',
  photos: [
    'photo1.png',
    'photo2.png'
  ]
}
```

Response:

```javascript
{
  success: 'ok'
}
```

#### POST /api/user/:userId/date

Request:

```javascript
{
  choice: 'beer'  // or 'ice cream' or 'coffee'
  lat: 147.2132,  // when logging in from device
  lng: -37.1334
}
```

Response:

```javascript
{
  room: 'socket-room-name'
}
```

Client will then join the socket room name.

#### Socket.IO

To send matches

To send uber details

### Outward facing APIs

#### Oauth into Facebook

Just happens once on registration. We need to get
- first name
- last name
- gender
- birthdate
- photos

[Documentation](https://developers.facebook.com/docs)

#### Call Uber

If matched, then call an Uber each to both parties (with their lat lng) with the same (highly curated) destination.

[Documentation](https://developer.uber.com/v1/endpoints/)

