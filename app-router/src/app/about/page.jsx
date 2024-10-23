import Image from "next/image"
import foo from "/public/images/spitz-3699477_1920.jpg"

export default function AboutPage() {
    return (
      <div>
        <h1>About Page Content</h1>
        <Image src="/images/spitz-3699479_1920.jpg" alt="lightouse" width={600} height={500}/>
        <Image src={foo} alt="lightouse" width={600} height={500}/>
        {/*외부 서버 이미지 출력*/}
        <Image src="https://cdn.pixabay.com/photo/2018/12/31/14/45/bukchon-3905234_960_720.jpg" alt="bukchon-3905234" width={600} height={500}/>
      </div>
    );
  }
  