import MainGlobalSection from "@/components/main_global_section";
import FormSection from "@/sections/contact/form_and_contact";
import Location from "@/sections/contact/location";
import React from "react";

type Props = {};

const ContactContainer = (props: Props) => {
  return (
    <React.Fragment>
      <MainGlobalSection
        title="Bizimlə əlaqə saxlayın "
        description="24/7 dəstək alın"
      />
      <FormSection />
      <Location />
    </React.Fragment>
  );
};

export default ContactContainer;
