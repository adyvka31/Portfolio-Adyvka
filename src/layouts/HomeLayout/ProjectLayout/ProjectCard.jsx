import Card from "../../../components/Card/Card";

/**
 * ProjectCard wraps the unified Card component with variant="project".
 */
export default function ProjectCard({ project }) {
  return <Card variant="project" item={project} />;
}
