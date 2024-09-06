const SectionWrapper = (props) => {
  return (
    <section id={props.id} className="py-20 px-5 dark:bg-darker">
      <div className="mx-auto max-w-screen-lg">
        <h3 className="mb-5 text-5xl font-medium tracking-tight md:text-6xl">
          {props.title}
        </h3>
        <p>{props.description}</p>
        <div className="mt-10">{props.children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
