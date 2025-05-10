
import AnimatedSection from "@/components/AnimatedSection";

const ProfileImage: React.FC = () => {
  return (
    <AnimatedSection direction="left">
      <div className="relative sm:sticky sm:top-32">
        <img
          src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Фотограф"
          className="rounded-md w-full object-cover aspect-[4/5] sm:aspect-[3/4]"
        />
        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-32 sm:h-48 w-32 sm:w-48 border-2 border-gold rounded-md hidden sm:block"></div>
      </div>
    </AnimatedSection>
  );
};

export default ProfileImage;
