export function ErrorMessage({ message }: { message: string | undefined }) {
  return (
    <small className="text-red-500">{message}</small>
  );
}
