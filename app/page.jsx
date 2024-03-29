import Image from "next/image";
import ModelCard from "./components/ModelCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className=" max-w-4xl m-auto ">
      <div className=" px-3">
        <img src="/bg.jpg" className="rounded-b-3xl" />
      </div>
      <div className="mx-3">
        <div className=" text-4xl font-bold text-violet-600 pt-12">盆友 你好！👋</div>
        <div className=" text-sm text-slate-500 py-6">由于国家政策和技术原因，原网站不再维护和使用。 推荐使用以下国内大语言模型应用！</div>
        <div className="grid grid-cols-2 gap-6 max-xl:grid-cols-1">
          <ModelCard url="https://tongyi.aliyun.com/qianwen/" modelName="通义千问" description="通义千问（Tongyi Qianwen）是由阿里云研发的超大规模语言模型，它是通义系列模型的一员。" iconPath="/ty.png" />
          <ModelCard url="https://yiyan.baidu.com/" modelName="文心一言" description="文心一言是百度推出的一款基于大模型的文本生成工具，可以根据用户的输入或选择，生成各种类型的文案，如诗歌、故事、广告等。" iconPath="/wx.png" />
          <ModelCard url="https://chatglm.cn/" modelName="智谱清言" description="智谱清言，是北京智谱华章科技有限公司推出的生成式AI助手，可在工作、学习和日常生活中为用户解答各类问题，完成各种任务。" iconPath="/zp.png" />
          <ModelCard url="https://xinghuo.xfyun.cn/" modelName="讯飞星火" description="讯飞星火认知大模型，是由科大讯飞推出的新一代认知智能大模型，拥有跨领域的知识和语言理解能力。" iconPath="/xh.png" />
        </div>

        <a href="https://zerohole.cn/">
          <div className="py-12 pl-3 text-violet-600">去我博客看看吧！🥰 -{">"}</div>
        </a>

        <Footer />
        
      </div>
    </main>
  );
}
