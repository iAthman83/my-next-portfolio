import { forwardRef } from "react";

const WorkflowSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="hidden container mx-auto h-screen bg-purple-200">
      WorkflowSection
    </div>
  );
});

export default WorkflowSection;
