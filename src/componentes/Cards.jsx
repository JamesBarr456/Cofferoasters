export const Card = ({ objeto }) => {
  return (
    <div key={objeto.id} className="text-center">
      <img src={objeto.imgUrl} className="w-52 mx-auto" alt={objeto.title} />
      <h2 className="font-fraunces text-2xl mt-7">{objeto.title}</h2>
      <p className="font-barlow mt-3">{objeto.summary}</p>
    </div>
  );
};

export const Card2 = ({ objeto }) => {
  return (
    <div key={objeto.id} className="">
      <img src={objeto.imgUrl} className="w-52 mx-auto" alt={objeto.title} />
      <h2 className="font-fraunces text-2xl mt-7">{objeto.title}</h2>
      <p className="font-barlow mt-3">{objeto.summary}</p>
    </div>
  );
};

export const CardQuality = ({ objeto }) => {
  return (
    <div className="space-y-5" key={objeto.id}>
      <span className="text-7xl font font-fraunces text-light-pink">{objeto.sub}</span>
      <h3 className="font-fraunces text-2xl text-slate-700">{objeto.title}</h3>
      <p className="font-barlow text-slate-700">{objeto.summary}</p>
    </div>
  );
};
