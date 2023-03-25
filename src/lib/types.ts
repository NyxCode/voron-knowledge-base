export type PostType = 'issue' | 'guide' | 'info';

export type TagType = 'part' | 'behaviour' | 'context';

export interface Tag {
	name: string;
	type: TagType;
}
