import TypeWriterEffect from 'react-typewriter-effect';

export function Landing() {
  return (
    <div className="Landing">
    <div className='LandingText'>
        <TypeWriterEffect
                textStyle={{ textAlign: 'center',}}
                startDelay={500}
                cursorColor="#3F3D56"
                multiText={[
                'Hello!',
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
            <h2>Passionate about technology that makes everyday life a little more enjoyable</h2>
        </div>
    </div>
  );
}