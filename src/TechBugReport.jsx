import React, { useState } from "react";

const TechBugReport = () => {
  const [bug, setBug] = useState("");
  const [desc, setDesc] = useState("");
  const [errors, setErrors] = useState("");
  const [module, setModule] = useState("");
  const [submit, setSubmit] = useState("");

  const Handler = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!bug.trim()) newErrors.bug = "Bug title is required!";

    if (!desc.trim()) newErrors.desc = "Description is required!";

    if (!module.trim()) newErrors.module = "Module is required!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmit(true);
    }
  };

  if (submit) {
    return <p>Bug report submitted successfully!</p>;
  }
  return (
    <div>
      <form onSubmit={Handler}>
        <h2>Tech Bug Report</h2>
        Bug Title:
        <input
          type="text"
          placeholder="Enter Bug title"
          value={bug}
          onChange={(e) => setBug(e.target.value)}
          className={errors.bug ? "input-error" : ""}
        />
        {errors.bug && <span className="error">{errors.bug}</span>}
        Bug Description:
        <textarea
          placeholder="Enter Bug Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        {errors.desc && <span className="error">{errors.desc}</span>}
        Affected Module:
        <select value={module} onChange={(e) => setModule(e.target.value)}>
          <option value="">Select Module</option>
          <option value="API">API</option>
          <option value="UI">UI</option>
          <option value="Database">Database</option>
          <option value="Network">Network</option>
        </select>
        {errors.module && <span>{errors.module}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TechBugReport;
