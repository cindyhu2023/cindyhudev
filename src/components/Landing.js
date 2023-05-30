import TypeWriterEffect from 'react-typewriter-effect';

export function Landing() {
  return (
    <div className="Landing" id="home">
    <div className='LandingText'>
        <TypeWriterEffect
                textStyle={{ textAlign: 'center',}}
                startDelay={500}
                cursorColor="#3F3D56"
                multiText={[
                'Hello World!',
                '哈囉！',
                'Hey there!',
                '你好！',
                'Welcome!',
                '歡迎！'
                ]}
                multiTextDelay={2000}
                typeSpeed={100}
                multiTextLoop={true}
            />
            <h1>I'm Cindy Hu</h1>
            <h4>Passionate about technology and creating enjoyable experiences</h4>
        </div>
    </div>
  );
}