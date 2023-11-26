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
    <div key={objeto.id} className="bg-teal-600 rounded-xl p-10 h-[350px] grid content-center">
      <div>
        <img src={objeto.imgUrl} className="w-20 mx-auto" alt={objeto.title} />
        <h2 className="font-fraunces text-2xl mt-7">{objeto.title}</h2>
        <p className="font-barlow mt-3 text-slate-300">{objeto.summary}</p>
      </div>
    </div>
  );
};

export const CardQuality = ({ objeto }) => {
  return (
    <div className="space-y-5" key={objeto.id}>
      <span className="text-7xl font font-fraunces text-light-pink">{objeto.sub}</span>
      <h3 className="font-fraunces text-2xl lg:text-3xl text-slate-700">{objeto.title}</h3>
      <p className="font-barlow text-slate-700">{objeto.summary}</p>
    </div>
  );
};

export const CardLocation = ({ objeto }) => {
  return (
    <div key={objeto.id}>
      <img src={objeto.locationMap} alt={objeto.alt} />
      <h1>{objeto.city}</h1>
      <p>{objeto.street}</p>
      <p>{objeto.town}</p>
      <p>{objeto.code}</p> 
      <p>{objeto.phone}</p>
    </div>
  );
};
