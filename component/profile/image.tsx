import { PropsWithChildren } from 'react';

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="pb-3 text-md-left text-center">
      <img style={{ maxHeight: '240px' }} className="img-fluid rounded" src={src} alt="Profile" />
    </div>
  );
}
